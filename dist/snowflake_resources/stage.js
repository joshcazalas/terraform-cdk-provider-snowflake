"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
const cdktf_1 = require("cdktf");
class Stage extends cdktf_1.TerraformResource {
    _database;
    _name;
    _schema;
    _aws_external_id;
    _comment;
    _copy_options;
    _credentials;
    _directory;
    _encryption;
    _file_format;
    _snowflake_iam_user;
    _storage_integration;
    _tag;
    _url;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_stage",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._database = config.database;
        this._name = config.name;
        this._schema = config.schema;
        this._aws_external_id = config.aws_external_id;
        this._comment = config.comment;
        this._copy_options = config.copy_options;
        this._credentials = config.credentials;
        this._directory = config.directory;
        this._encryption = config.encryption;
        this._file_format = config.file_format;
        this._snowflake_iam_user = config.snowflake_iam_user;
        this._storage_integration = config.storage_integration;
        this._tag = config.tag;
        this._url = config.url;
    }
    getAttributes() {
        return {
            database: this._database,
            name: this._name,
            schema: this._schema,
            aws_external_id: this._aws_external_id,
            comment: this._comment,
            copy_options: this._copy_options,
            credentials: this._credentials,
            directory: this._directory,
            encryption: this._encryption,
            file_format: this._file_format,
            snowflake_iam_user: this._snowflake_iam_user,
            storage_integration: this._storage_integration,
            tag: this._tag,
            url: this._url,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_stage.${this.friendlyUniqueId}.${attribute}}`;
    }
    get database() {
        return this._database;
    }
    set database(value) {
        this._database = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get schema() {
        return this._schema;
    }
    set schema(value) {
        this._schema = value;
    }
    get aws_external_id() {
        return this._aws_external_id;
    }
    set aws_external_id(value) {
        this._aws_external_id = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get copy_options() {
        return this._copy_options;
    }
    set copy_options(value) {
        this._copy_options = value;
    }
    get credentials() {
        return this._credentials;
    }
    set credentials(value) {
        this._credentials = value;
    }
    get directory() {
        return this._directory;
    }
    set directory(value) {
        this._directory = value;
    }
    get encryption() {
        return this._encryption;
    }
    set encryption(value) {
        this._encryption = value;
    }
    get file_format() {
        return this._file_format;
    }
    set file_format(value) {
        this._file_format = value;
    }
    get snowflake_iam_user() {
        return this._snowflake_iam_user;
    }
    set snowflake_iam_user(value) {
        this._snowflake_iam_user = value;
    }
    get storage_integration() {
        return this._storage_integration;
    }
    set storage_integration(value) {
        this._storage_integration = value;
    }
    get tag() {
        return this._tag;
    }
    set tag(value) {
        this._tag = value;
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
}
exports.Stage = Stage;