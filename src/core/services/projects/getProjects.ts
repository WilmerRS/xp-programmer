export interface Backlog{
  code: string,
  history: string,
  description: string,
  date: string,
  status: string,
  dutymanager: {
    name: string,
    id: string
  }
}

export interface ReportType{
  id: string,
  code: string,
  title: string,
  date: string,
  description: string
}

export interface Project {
  name: string;
  description: string;
  id: string;
  backlog?: Backlog[],
  reports?: ReportType[]
}

export const getProjects = () => {
  return require('../../../../data/projects.json').projects as Project[]
}
