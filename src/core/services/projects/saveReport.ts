// import { writeFileSync } from 'fs'
import { addDoc, collection } from 'firebase/firestore'
import { app, database } from '../../firebase/firebaseConfig'
import { ReportType } from './getProjects'

export const saveReport = (idProject: string, report: ReportType) => {
  const dbInstance = collection(database, `projects/${idProject}/reports`)
  return addDoc(dbInstance, report)
}
