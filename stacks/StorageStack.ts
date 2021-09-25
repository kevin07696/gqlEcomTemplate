import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const bucket = new sst.Bucket(this, "Uploads");
    
    const categoryTable = new sst.Table(this, "Categories", {
      fields: {
        categoryId: sst.TableFieldType.STRING
      },
      primaryIndex: { partitionKey: "categoryId" }
    });

    const menuTable = new sst.Table(this, "MenuItems", {
      fields: {
        categoryId: sst.TableFieldType.STRING,
        menuItemId: sst.TableFieldType.STRING
      },
      primaryIndex: { partitionKey: "categoryId", sortKey: "menuItemId"}
    });
    
    const userTable = new sst.Table(this, "Users", {
      fields: {
        userId: sst.TableFieldType.STRING
      },
      primaryIndex: { partitionKey: "userId" }
    });
  }
}