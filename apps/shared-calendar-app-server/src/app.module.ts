import { Module } from "@nestjs/common";
import { TeamModule } from "./team/team.module";
import { TeamMemberModule } from "./teamMember/teamMember.module";
import { EventModule } from "./event/event.module";
import { CalendarIntegrationModule } from "./calendarIntegration/calendarIntegration.module";
import { UserModule } from "./user/user.module";
import { MeetingModule } from "./meeting/meeting.module";
import { CalendarModuleModule } from "./CalendarModule/calendarmodule.module";
import { EventModuleModule } from "./EventModule/eventmodule.module";
import { TeamModuleModule } from "./TeamModule/teammodule.module";
import { UserModuleModule } from "./UserModule/usermodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    TeamModule,
    TeamMemberModule,
    EventModule,
    CalendarIntegrationModule,
    UserModule,
    MeetingModule,
    CalendarModuleModule,
    EventModuleModule,
    TeamModuleModule,
    UserModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
