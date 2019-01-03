/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-env mocha */
const { auth } = require('../src/google/auth');
const key = require('../service-account-key.json');

describe('Test google.auth', () => {


  if (process.env['CLIENT_EMAIL']&&process.env['PRIVATE_KEY']) {
    it('Test successful authentication', (done) => {
      auth(key.client_email, key.private_key)
        .then(() => done())
        .catch(done)
    });
  } else {
    it.skip('Test successful authentication (needs working credentials)');
  }

  it('Test unsuccessful authentication', (done) => {
    auth('foo', 'bar')
      .then(() => done('should throw error'))
      .catch(() => done());
  });
});
