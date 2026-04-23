const db: Record<string, any> = {};

export async function saveSaga(saga: any) {
  db[saga.id] = saga;
}

export async function updateSaga(saga: any) {
  db[saga.id] = saga;
}

export async function getSaga(id: string) {
  return db[id];
}
