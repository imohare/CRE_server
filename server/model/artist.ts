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

import { Album } from './album';
import { Merchandise } from './merchandise';
import { Event } from './event';

class Artist extends Model {
  public eth_address!: string;
  public username!: string;
  public website?: string;
  public instagram?: string;
  public twitter?: string;
  public discord?: string;
  public spotify?: string;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  //Events association methods

  //Album association methods
  
  //Merchandise association methods

  // Populated for inclusions
  public readonly events?: Event[];
  public readonly albums?: Album[];
  public readonly merchandise?: Merchandise[];

  public static associations: {
    events: Association<Artist, Event>;
    albums: Association<Artist, Album>;
    merchandise: Association<Artist, Merchandise>
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        eth_address: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            name: 'artist_username',
            msg: 'An artist with this username already exists.'
          }
        },
        website: {          
          type: DataTypes.STRING,
        },
        instagram: {
          type: DataTypes.STRING,
        },
        twitter: {
          type: DataTypes.STRING,
        },
        discord: {
          type: DataTypes.STRING,
        },
        spotify: {
          type: DataTypes.STRING,
        }
      }, 
    {sequelize})
  }
}
export { Artist };