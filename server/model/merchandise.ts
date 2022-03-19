import {
  Association, 
  DataTypes, 
  Model, 
  Sequelize, 
  HasManyCountAssociationsMixin, 
  HasManyGetAssociationsMixin, 
  HasManyHasAssociationMixin, 
  BelongsToSetAssociationMixin, 
  BelongsToGetAssociationMixin
} from 'sequelize';

import { Artist } from './artist';
import { Token } from './token';

class Merchandise extends Model {
  public name!: string;
  public type!: string;
  public description?: string;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  //Artist association methods

  //Token association methods
  
  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly tokens?: Token[];

  public static associations: {
    artist: Association<Artist, Merchandise>;
    tokens: Association<Merchandise, Token>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
        }
      }, 
    {sequelize})
  }
}
export { Merchandise };
