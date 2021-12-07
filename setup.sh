npm init;
mkdir test;
mkdir views;
mkdir models;
mkdir db;
mkdir spec;

touch .gitignore;
cat >> .gitignore << EOF
node_modules
.env
EOF

touch .env.example;
cat >> .env.example << EOF
DATABASE=
DATABASE_USER=
DATABASE_PASSWORD=
EOF

npm install --save-dev cypress jasmine  method-override nodemon pg pg-hstore;
npm install --save ejs dotenv express;
echo "Will you be using sequelize (y/n in lower case)";
read choice;

if [ $choice == "y" ]
then
  npm install --save-dev sequelize sequelize-cli
elif [ $choice == "n" ]
then
  npm install --save-dev pg-format
else
  echo "No database component installed";
fi
npx jasmine init;
npx cypress open;
