import { URL } from "url";
import bcrypt from "bcryptjs";
import { createShortUrl, findUrl } from "../db/url.js";
import config from "../config.js";
import validator from 'validator';
import asyncHandler from 'express-async-handler';


const browsersList = ["IE", "Firefox", "Chrome", "Opera", "Safari", "Edge"];
const osList = ["Windows", "Mac Os X", "Linux", "Chrom OS", "Android", "iOS"];

export const urlShortener = asyncHandler(async (req, res) => {
    const { body } = req;
    const { target } = body;
    if (!target) {
        return res.status(400).json({ error: 'No target has been provided.' });
    }
    if (target.length > 1024) {
        return res.status(400).json({ error: 'Maximum URL length is 1024.' });
    }
    if (!validator.isURL(target, { require_protocol: false })) {
        return res.status(400).json({ error: 'URL is not valid.' });
    }

    const fullTarget = URL.parse(target).protocol ? target : `http://${target}`;

    const url = await createShortUrl({ ...body, target: fullTarget });
    return res.json(url);
});

export const goToUrl = asyncHandler(async (req, res) => {
    // Get the short URL ID from either the URL parameters or the request body.
    const id = req.params.id || req.body.id;

    //At this time custom domain is not supported
    const domain = config.DEFAULT_DOMAIN;
    const urls = await findUrl({ id, domain });
    // If no URL is found, pass control to the next 404 middleware handler.
    if (!urls || !urls.length) {
        return res.status(400).json({ error: 'No Url for the given route' });
    }
    // Take the first matching URL from the results.
    const [url] = urls;
    
    // Redirect the user to the target URL.
    return res.redirect(url.target);
});