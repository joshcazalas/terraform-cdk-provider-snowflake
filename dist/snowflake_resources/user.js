"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const cdktf_1 = require("cdktf");
class User extends cdktf_1.TerraformResource {
    _name;
    _comment;
    _default_namespace;
    _default_role;
    _default_secondary_roles;
    _default_warehouse;
    _disabled;
    _display_name;
    _email;
    _first_name;
    _last_name;
    _login_name;
    _must_change_password;
    _password;
    _rsa_public_key;
    _rsa_public_key_2;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_user",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._name = config.name;
        this._comment = config.comment;
        this._default_namespace = config.default_namespace;
        this._default_role = config.default_role;
        this._default_secondary_roles = config.default_secondary_roles;
        this._default_warehouse = config.default_warehouse;
        this._disabled = config.disabled;
        this._display_name = config.display_name;
        this._email = config.email;
        this._first_name = config.first_name;
        this._last_name = config.last_name;
        this._login_name = config.login_name;
        this._must_change_password = config.must_change_password;
        this._password = config.password;
        this._rsa_public_key = config.rsa_public_key;
        this._rsa_public_key_2 = config.rsa_public_key_2;
    }
    getAttributes() {
        return {
            name: this._name,
            comment: this._comment,
            default_namespace: this._default_namespace,
            default_role: this._default_role,
            default_secondary_roles: this._default_secondary_roles,
            default_warehouse: this._default_warehouse,
            disabled: this._disabled,
            display_name: this._display_name,
            email: this._email,
            first_name: this._first_name,
            last_name: this._last_name,
            login_name: this._login_name,
            must_change_password: this._must_change_password,
            password: this._password,
            rsa_public_key: this._rsa_public_key,
            rsa_public_key_2: this._rsa_public_key_2,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_user.${this.friendlyUniqueId}.${attribute}}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get default_namespace() {
        return this._default_namespace;
    }
    set default_namespace(value) {
        this._default_namespace = value;
    }
    get default_role() {
        return this._default_role;
    }
    set default_role(value) {
        this._default_role = value;
    }
    get default_secondary_roles() {
        return this._default_secondary_roles;
    }
    set default_secondary_roles(value) {
        this._default_secondary_roles = value;
    }
    get default_warehouse() {
        return this._default_warehouse;
    }
    set default_warehouse(value) {
        this._default_warehouse = value;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get display_name() {
        return this._display_name;
    }
    set display_name(value) {
        this._display_name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get first_name() {
        return this._first_name;
    }
    set first_name(value) {
        this._first_name = value;
    }
    get last_name() {
        return this._last_name;
    }
    set last_name(value) {
        this._last_name = value;
    }
    get login_name() {
        return this._login_name;
    }
    set login_name(value) {
        this._login_name = value;
    }
    get must_change_password() {
        return this._must_change_password;
    }
    set must_change_password(value) {
        this._must_change_password = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get rsa_public_key() {
        return this._rsa_public_key;
    }
    set rsa_public_key(value) {
        this._rsa_public_key = value;
    }
    get rsa_public_key_2() {
        return this._rsa_public_key_2;
    }
    set rsa_public_key_2(value) {
        this._rsa_public_key_2 = value;
    }
}
exports.User = User;
