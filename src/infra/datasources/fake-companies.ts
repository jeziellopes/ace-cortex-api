import { CompanyModel } from '@data/models'
import fs from 'fs'
import path from 'path'

export const companies: CompanyModel[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, './companies.json'), 'utf8'))
