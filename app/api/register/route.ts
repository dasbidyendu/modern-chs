
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs"
import UserModel from "@/model/User";
dbConnect();
console.log("Connected to database")

export  async function POST(request: NextRequest) {
    try {
        

        const reqBody = await request.json(); 
        console.log(reqBody);

        const { username, password, email } = reqBody;
        const existingUser = await UserModel.findOne({
            username
        })

        if (existingUser) {
            return NextResponse.json({ success: false, message: "User already exists" },
                { status: 400 }
            );
        }

        const existingEmail = await UserModel.findOne({
            email
        })
        if (existingEmail) { 
            return NextResponse.json({ success: false, message: "Email already exists" },{status: 400})
        }
        
        if (!existingEmail && !existingUser) {
            const hashedpassword = await bcrypt.hash(password, 10);
            

            const NewUser = new UserModel({
                username,
                email,
                password: hashedpassword,
                isPremium:false,
            })
            console.log("use created successfully")
            await NewUser.save();
        }
    }
    catch (err: any) { 
        console.log(err,"Error registering User");
     }
}