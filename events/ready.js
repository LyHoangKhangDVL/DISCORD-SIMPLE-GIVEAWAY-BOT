module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run() {
        this.client.user.setActivity(`g?help`, {
            type: "STREAMING",
            url: "https://www.youtube.com/watch?v=ovGcjFPdnNQ"
        });;
        console.log(`${this.client.user.tag}, Watching ${this.client.users.cache.size} users and ${this.client.guilds.cache.size} servers.`);
    }
}
