import { CompanyModel } from '@data/models'
import fs from 'fs'
import path from 'path'

export const fakeCompany = JSON.parse(fs.readFileSync(path.resolve(__dirname, './company.json'), 'utf8'))

export const company = fakeCompany as CompanyModel
