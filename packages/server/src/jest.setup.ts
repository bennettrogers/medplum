import { ClientApplication, createReference, Login } from '@medplum/core';
import { isOk, repo } from './fhir';
import { generateAccessToken } from './oauth';

export async function initTestAuth() {
  const client = await initTestClientApplication();
  const scope = 'openid';

  const [loginOutcome, login] = await repo.createResource<Login>({
    resourceType: 'Login',
    client: createReference(client),
    authTime: new Date(),
    scope
  });

  if (!isOk(loginOutcome) || !login) {
    throw new Error('Error creating login');
  }

  return generateAccessToken({
    login_id: login.id as string,
    sub: client.id as string,
    username: client.id as string,
    client_id: client.id as string,
    profile: client.resourceType + '/' + client.id,
    scope
  });
}

async function initTestClientApplication(): Promise<ClientApplication> {
  const [outcome, result] = await repo.createResource({
    resourceType: 'ClientApplication',
    secret: 'big-long-string',
    redirectUri: 'https://example.com'
  } as ClientApplication);

  if (!isOk(outcome)) {
    throw new Error('Error creating application');
  }

  if (!result) {
    throw new Error('ClientApplication is null');
  }

  return result;
}
