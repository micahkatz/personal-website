// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AxiosError, AxiosResponse } from 'axios';
import { Client, ClientInterface } from 'linkedin-private-api';
import type { NextApiRequest, NextApiResponse } from 'next';

const axios = require('axios');
type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (process.env.LINKEDIN_USERNAME && process.env.LINKEDIN_PASSWORD) {
        const client: ClientInterface = new Client();
        await client.login.userPass({
            username: process.env.LINKEDIN_USERNAME,
            password: process.env.LINKEDIN_PASSWORD,
        });
        const ownProfile = await client.profile.getOwnProfile();

        console.log(ownProfile);

        res.status(200).json({ name: 'Got linkedin data' });
    } else {
        res.status(500);
    }
}
