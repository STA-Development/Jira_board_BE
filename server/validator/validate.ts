import {body} from "express-validator";

class JiraValidator {
checkTodo() {
return[body("title").notEmpty().withMessage("The title value should not be empty"),
];
}
}

export default new JiraValidator();