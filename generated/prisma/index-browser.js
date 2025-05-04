
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Auth_groupScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Auth_group_permissionsScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  permission_id: 'permission_id'
};

exports.Prisma.Auth_permissionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  content_type_id: 'content_type_id',
  codename: 'codename'
};

exports.Prisma.Auth_userScalarFieldEnum = {
  id: 'id',
  password: 'password',
  last_login: 'last_login',
  is_superuser: 'is_superuser',
  username: 'username',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  is_staff: 'is_staff',
  is_active: 'is_active',
  date_joined: 'date_joined'
};

exports.Prisma.Auth_user_groupsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  group_id: 'group_id'
};

exports.Prisma.Auth_user_user_permissionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  permission_id: 'permission_id'
};

exports.Prisma.Django_admin_logScalarFieldEnum = {
  id: 'id',
  action_time: 'action_time',
  object_id: 'object_id',
  object_repr: 'object_repr',
  action_flag: 'action_flag',
  change_message: 'change_message',
  content_type_id: 'content_type_id',
  user_id: 'user_id'
};

exports.Prisma.Django_content_typeScalarFieldEnum = {
  id: 'id',
  app_label: 'app_label',
  model: 'model'
};

exports.Prisma.Django_migrationsScalarFieldEnum = {
  id: 'id',
  app: 'app',
  name: 'name',
  applied: 'applied'
};

exports.Prisma.Django_sessionScalarFieldEnum = {
  session_key: 'session_key',
  session_data: 'session_data',
  expire_date: 'expire_date'
};

exports.Prisma.Estt_main_app_diamond_timesScalarFieldEnum = {
  id: 'id',
  diamond_target: 'diamond_target',
  level_id: 'level_id',
  team_id: 'team_id'
};

exports.Prisma.Estt_main_app_gameScalarFieldEnum = {
  id: 'id',
  game: 'game'
};

exports.Prisma.Estt_main_app_gamesuggestionScalarFieldEnum = {
  id: 'id',
  game_name: 'game_name',
  created_at: 'created_at',
  suggested_by_id: 'suggested_by_id'
};

exports.Prisma.Estt_main_app_levelScalarFieldEnum = {
  id: 'id',
  level_name: 'level_name',
  game_id: 'game_id'
};

exports.Prisma.Estt_main_app_org_join_codeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  org_id: 'org_id'
};

exports.Prisma.Estt_main_app_org_leaderScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  org_id: 'org_id',
  user_id: 'user_id'
};

exports.Prisma.Estt_main_app_org_teamScalarFieldEnum = {
  id: 'id',
  team_id: 'team_id',
  org_id: 'org_id'
};

exports.Prisma.Estt_main_app_org_userScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  org_id: 'org_id'
};

exports.Prisma.Estt_main_app_organizationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at'
};

exports.Prisma.Estt_main_app_target_timesScalarFieldEnum = {
  id: 'id',
  high_target: 'high_target',
  low_target: 'low_target',
  level_id: 'level_id',
  team_id: 'team_id'
};

exports.Prisma.Estt_main_app_teamScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Estt_main_app_team_gameScalarFieldEnum = {
  id: 'id',
  game_id: 'game_id',
  team_id: 'team_id'
};

exports.Prisma.Estt_main_app_team_userScalarFieldEnum = {
  id: 'id',
  isCoach: 'isCoach',
  team_id: 'team_id',
  user_id: 'user_id'
};

exports.Prisma.Estt_main_app_timeScalarFieldEnum = {
  id: 'id',
  time: 'time',
  level_id: 'level_id',
  user_id: 'user_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  auth_group: 'auth_group',
  auth_group_permissions: 'auth_group_permissions',
  auth_permission: 'auth_permission',
  auth_user: 'auth_user',
  auth_user_groups: 'auth_user_groups',
  auth_user_user_permissions: 'auth_user_user_permissions',
  django_admin_log: 'django_admin_log',
  django_content_type: 'django_content_type',
  django_migrations: 'django_migrations',
  django_session: 'django_session',
  estt_main_app_diamond_times: 'estt_main_app_diamond_times',
  estt_main_app_game: 'estt_main_app_game',
  estt_main_app_gamesuggestion: 'estt_main_app_gamesuggestion',
  estt_main_app_level: 'estt_main_app_level',
  estt_main_app_org_join_code: 'estt_main_app_org_join_code',
  estt_main_app_org_leader: 'estt_main_app_org_leader',
  estt_main_app_org_team: 'estt_main_app_org_team',
  estt_main_app_org_user: 'estt_main_app_org_user',
  estt_main_app_organization: 'estt_main_app_organization',
  estt_main_app_target_times: 'estt_main_app_target_times',
  estt_main_app_team: 'estt_main_app_team',
  estt_main_app_team_game: 'estt_main_app_team_game',
  estt_main_app_team_user: 'estt_main_app_team_user',
  estt_main_app_time: 'estt_main_app_time'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
