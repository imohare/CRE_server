import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import { Event } from './event';
import { Consumer } from './consumer';

class EventToken extends Model {
  public image?: string;
  public consumer_points!: number;
  public edition_number!: number;
  public total_editions!: number;
  public token_type!: string;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Event association with methods
  public getEvent!: BelongsToGetAssociationMixin<Event>;
  public setEvent!: BelongsToSetAssociationMixin<Event, number>;

  // Consumer association with methods
  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly associated_to_event!: Event;
  public readonly owned_by!: Consumer;

  public static associations: {
    associated_to_event: Association<Event, EventToken>;
    owned_by: Association<EventToken, Consumer>;
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
export { EventToken };
