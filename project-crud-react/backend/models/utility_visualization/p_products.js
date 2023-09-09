import { Sequelize } from "sequelize";
import db from "../../config/database-sequelize.js";

const {DataTypes} = Sequelize;
// CREATE TABLE P_PRODUCT IN CRUD_REACT
const Product = db.define('p_product',{
    name: DataTypes.STRING,
    product: DataTypes.STRING,
    category: DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();