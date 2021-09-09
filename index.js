const { Sequelize, Model, DataTypes } = require('sequelize');

async function test() {
	const sequelize = new Sequelize({
		dialect: 'postgres',
		username: 'postgres',
		password: '123456',
		database: 'ac',
		host: 'abyssii',
		port: '35432'
	});
	
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		camelCase: {
			type: DataTypes.STRING(100),
			field: 'camelCase',
		},
		snake_case: {
			type: DataTypes.STRING(100),
			field: 'snake_case',
		},
	};
	
	const options = {
		tableName: 'strange_table',
		createdAt: false,
		updatedAt: false,
	}
	
	const Strange = sequelize.define('strangeTable', attributes, options);

	// await sequelize.sync(); // uncomment this if you want to create table autometic

	const result = (await Strange.findAll()).map(item => item.toJSON());

	console.log(result);
	process.exit();
}

test()