import connect from '../../../../utils/db';
import User from '../../../../models/User';
import { NextResponse } from 'next/server';
import bycrypt from 'bcryptjs';

export const POST = async (request) => {
    const { name, email, password } = await request.json()

    await connect();

    const hashPassword = await bycrypt.hash(password, 5);

    const newUser = new User({
        name,
        email,
        password: hashPassword,
    });

    try{
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201,
        });

    }catch(err){
        return new NextResponse(err.message, {
            status: 500,
        });
    }
}