import { contactSchema } from "@/lib/validation/contactFormSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type contact = z.infer<typeof contactSchema>;

export async function POST(req: NextRequest) {
  const body: contact = await req.json();

  const validate = await contactSchema.safeParseAsync(body);

  if (!validate.success) {
    return NextResponse.json({ error: "Invalid Data." }, { status: 400 });
  }

  try {
    await prisma.contactInfo.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        requirements: body.requirements,
        service: {
          connect: { id: parseInt(body.service_id) },
        },
        comment: body.comment || "",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ success: "Form submitted successfully" });
}
