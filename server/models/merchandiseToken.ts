import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import { Merchandise } from './merchandise';
import { Consumer } from './consumer';

class MerchandiseToken extends Model {
  public image?: string;
  public consumer_points!: number;
  public edition_number!: number;
  public total_editions!: number;
  public token_type!: string;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Merchandise association with methods
  public getMerchandise!: BelongsToGetAssociationMixin<Merchandise>;
  public setMerchandise!: BelongsToSetAssociationMixin<Merchandise, number>;

  // Consumer association with methods
  public getConsumer?: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer?: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly associated_to_merchandise!: Merchandise;
  public readonly owned_by?: Consumer;

  public static associations: {
    associated_to_merchandise: Association<Merchandise, MerchandiseToken>;
    owned_by: Association<MerchandiseToken, Consumer>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        image: {
          type: DataTypes.STRING,
          defaultValue: 'no image uploaded'
        },
        consumer_points: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        edition_number: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        total_editions: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        token_type: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { sequelize })
  }
}
export { MerchandiseToken };
