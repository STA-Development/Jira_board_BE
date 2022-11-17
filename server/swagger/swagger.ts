import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    info: {
      title: "JiraBoardLibrary",
      version: "1.0.0",
      description: "JiraBoard API",
    },
  },
  apis: ["app.ts"],
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
