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

class Event extends Model {
  public name!: string;
  public address!: string;
  public date!: Date;
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
    artist: Association<Artist, Event>;
    tokens: Association<Event, Token>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
        }
      }, 
    {sequelize})
  }
}
export { Event };
