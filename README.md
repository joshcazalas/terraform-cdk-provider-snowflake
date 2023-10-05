# terraform-cdk-provider-snowflake

**terraform-cdk-provider-snowflake** is a custom provider built on top of `terraform-provider-snowflake` by Snowflake Labs. You can find the original repository here: [terraform-provider-snowflake](https://github.com/Snowflake-Labs/terraform-provider-snowflake).

## How it Works
The project automates the creation of a Terraform CDK library in TypeScript based on `terraform-provider-snowflake` by Snowflake Labs. Here's how it works:

1. The latest version of `terraform-provider-snowflake` is cloned from the Snowflake Labs repository.
2. README files for each of the resources are parsed to extract information.
3. This information is then used to generate TypeScript interfaces.
4. The resources and their parameters are organized into a JSON file located at `tools/snowflake_resources.json`.
5. Handlebars templates, located in `tools/templates`, are used to loop through the JSON data and create a TypeScript file for each resource.
6. All generated files in `src/snowflake_resources` are compiled into `dist/snowflake_resources`.

## Getting Started
To rebuild all Snowflake resource files, follow these steps:

1. Run `npm install` to install the necessary dependencies.
2. Execute the `main.js` script to generate the Terraform CDK files.