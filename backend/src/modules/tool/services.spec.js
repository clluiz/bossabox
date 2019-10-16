'use strict';

/* globals describe, after, before, it */
const { expect } = require('chai');
const Tool = require('./model');
const ToolService = require('./service');

describe('Tool service', () => {
  after(async () => {
    await Tool.deleteMany({});
  });

  describe('save', () => {
    it('should return saved tool', async () => {
      const params = {
        title: 'Test tool',
        description: 'Description of the tool',
        tags: ['tag 1', 'tag 2'],
        link: 'https://testtool.com'
      };

      const savedTool = await ToolService.save(params);
      expect(savedTool).to.deep.include(params);
    });
    it('should not save without parameters', async () => {
      const params = {};
      try {
        await ToolService.save(params);
      } catch (error) {
        expect(error).to.exist;
      }
    });
  });
  describe('remove', () => {
    let toolToRemove;
    before(async () => {
      toolToRemove = await Tool.create({
        title: 'Tool to remove',
        description: 'Tool to remove',
        link: 'https://tooltoremove.com',
        tags: ['tags']
      });
    });
    it('should remove to by Id', async () => {
      await ToolService.remove(toolToRemove._id);
      const removedTool = await Tool.find({ _id: toolToRemove._id }).lean();
      expect(removedTool).to.be.empty;
    });
    it('should throw error when trying to remove invalid id', async () => {
      try {
        await ToolService.remove('123');
      } catch (error) {
        expect(error).to.be.exist;
      }
    });
  });
  describe('list', () => {
    before(async () => {
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
    it('should list all tools when no query is passsed', async () => {
      const tools = await ToolService.list();
      expect(tools.length).to.be.equal(3);
    });
    it('should list only tools with tags passed on query', async () => {
      const tools = await ToolService.list({ tags: { $in: ['notion'] } });
      expect(tools.length).to.be.equal(1);
      expect(tools[0].title).to.be.equal('Tool 3');
    });
    it('should throw error when invalid query is passed', async () => {
      try {
        await ToolService.list({ $asd: 1 });
      } catch (error) {
        expect(error).to.exist;
      }
    });
  });
});
