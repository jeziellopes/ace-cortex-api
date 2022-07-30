import { Company } from '@domain/entities'
import fs from 'fs'
import path from 'path'

export const companies: Company[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, './companies.json'), 'utf8'))
