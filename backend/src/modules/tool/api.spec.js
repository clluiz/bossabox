'use strict';

const request = require('supertest');
const { expect } = require('chai');

const server = require('../../app');
const Tool = require('./model');

describe('Tool API integrations test', () => {
  let app;
  after(async () => {
    await Tool.deleteMany();
  });

  describe('GET /tools', () => {
    before(async () => {
      app = await server.toTest();
      await Tool.deleteMany({});
      await Tool.create([
        {
          title: 'Tool 1',
          description: 'Tool 1',
          link: 'https://tool1.com',
          tags: ['tool 1']
        },
        {
          title: 'Tool 2',
          description: 'Tool 2',
          link: 'https://tool2.com',
          tags: ['tool 2', 'svn', 'gulp']
        },
        {
          title: 'Tool 3',
          description: 'Tool 3',
          link: 'https://tool3.com',
          tags: ['tool 3', 'notion']
        }
      ]);
    });

    after(async () => {
      await Tool.deleteMany();
    });

    describe('without query', () => {
      it('should get all tools', async () => {
        const response = await request(app.callback()).get('/tools');
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.equal(3);
      });
    });

    describe('with tags in query', () => {
      it('should return only Tools with specified tags', async () => {
        const response = await request(app.callback()).get(
          '/tools?tag=tool 1&tag=svn'
        );
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.equal(2);
      });
    });
  });

  describe('POST /tools', () => {
    it('should have 201 status and return created tool', async () => {
      const response = await request(app.callback())
        .post('/tools')
        .send({
          title: 'New tool',
          description: 'description',
          link: 'https://newtool.com',
          tags: ['tag 1', 'tag 2']
        });
      expect(response.statusCode).to.be.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('_id');
    });
  });

  describe('DELETE /tools', () => {
    let toolToRemove;
    before(async () => {
      toolToRemove = await Tool.create({
        title: 'Tool to remove',
        description: 'Tool to remove',
        link: 'https://tooltoremove.com',
        tags: ['tags']
      });
    });
    it('should have 204', async () => {
      const response = await request(app.callback()).delete(
        `/tools/${toolToRemove._id}`
      );
      expect(response.statusCode).to.be.equal(204);
    });
  });
});
