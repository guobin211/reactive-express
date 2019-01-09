import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Photo } from '../entity/Photo';

/**
 * Loads all Photo from the database.
 */
export async function getAllPhotos(request: Request, response: Response) {

    // get a repository to perform operations
    const photoRepository = getManager().getRepository(Photo);

    // load
    const photos = await photoRepository.find();

    // return loaded photos
    response.send(photos);
}

/**
 * post new photo
 * @param request
 * @param response
 */
export async function postSavePhoto(request: Request, response: Response) {

    const photoRepository = getManager().getRepository(Photo);

    // create a real object from post json object sent over http
    const newPost = photoRepository.create(request.body);

    // save received
    await photoRepository.save(newPost).then(success => {
        console.log(success);
        response.send(newPost);
    }).catch(err => {
        console.log(err);
        response.json(err);
    });

}

export async function photoGetById(request: Request, response: Response) {

    const photoRepository = getManager().getRepository(Photo);

    const photo = await photoRepository.findOne(request.params.id);

    if (!photo) {
        response.status(404);
        response.redirect('http://localhost:3000/404.html');
        return;
    }
    // return loaded photo
    response.send(photo);
}

