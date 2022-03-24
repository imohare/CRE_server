import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import { Artist } from './artist';
import { Event } from './event';
import { Consumer } from './consumer';

class EventToken extends Model {

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Event association
  public getEvent!: BelongsToGetAssociationMixin<Event>;
  public setEvent!: BelongsToSetAssociationMixin<Event, number>;


  // Consumer association

  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly event!: Event;
  public readonly owned_by!: Consumer;

  public static associations: {
    artist: Association<Artist, EventToken>;
    event: Association<Event, EventToken>;
    owned_by: Association<EventToken, Consumer>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init( {}, { sequelize })
  }
}
export { EventToken };
