module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'dti',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};