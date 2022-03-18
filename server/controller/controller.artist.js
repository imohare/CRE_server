export const createArtist = async () => {
    const { eth_address, website, instagram, twitter, discord, spotify, username } = req.body;
    await sequelize.sync();
    const artist = await Artist.create({
        eth_address: eth_address,
        website: website,
        instagram: instagram,
        twitter: twitter,
        discord: discord,
        spotify: spotify,
        username: username
    });
    return artist.toJSON();
}


