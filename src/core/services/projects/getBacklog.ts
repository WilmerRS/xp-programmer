import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../firebase/firebaseConfig'

export const getBacklog = (idProject: string) => {
  const dbInstance = collection(database, `projects/${idProject}/backlog`)
  return getDocs(dbInstance)
}
