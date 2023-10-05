# terraform-cdk-provider-snowflake
Terraform CDK Snowflake Provider Built on top of terraform-provider-snowflake by Snowflake Labs: https://github.com/Snowflake-Labs/terraform-provider-snowflake

## Getting Started
To rebuild all Snowflake resource files:
1. Navigate to the tools directory - `cd tools` from the root of the project
2. Clone Snowflake Labs terraform-provider-snowflake - `node clone_terraform_provider.js`
3. Run create_cdk_provider_files.js - `node create_cdk_provider_files.js`
4. Recompile the project - `tsc`