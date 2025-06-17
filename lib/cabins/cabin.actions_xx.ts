'use server';

import { PrismaClient } from '@/lib/generated/prisma/client';
import { Prisma } from '@/lib/generated/prisma/client';
import { convertToPlainObject, formatError } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { insertCabinSchema, updateCabinSchema } from '../validator';

const prisma = new PrismaClient();

// Get all cabins
export async function getCabins() {}

// Get single cabin by it's ID
export async function getCabinById(productId: string) {}

// Delete a cabin
export async function deleteCabin(id: string) {}

// Update a cabin
export async function updateCabin(data: z.infer<typeof updateCabinSchema>) {}

// Create a cabin
export async function createCabin(data: z.infer<typeof insertCabinSchema>) {}
