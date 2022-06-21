import { collection, getDocs } from 'firebase/firestore'
import { app, database } from '../../firebase/firebaseConfig'

export const getReports = (idProject: string) => {
  const dbInstance = collection(database, `projects/${idProject}/reports`)
  return getDocs(dbInstance)
}
