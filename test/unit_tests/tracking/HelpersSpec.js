/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import Conversation from 'src/script/entity/Conversation';
import {ConversationType} from 'src/script/tracking/attribute';
import trackingHelpers from 'src/script/tracking/Helpers';

describe('trackingHelpers', () => {
  describe('getConversationType', () => {
    it('returns correct type for one on one conversation', () => {
      const conversation_et = new Conversation(z.util.createRandomUuid());
      conversation_et.type(z.conversation.ConversationType.ONE2ONE);

      expect(trackingHelpers.getConversationType(conversation_et)).toBe(ConversationType.ONE_TO_ONE);
    });

    it('returns correct type for group conversation', () => {
      const conversation_et = new Conversation(z.util.createRandomUuid());
      conversation_et.type(z.conversation.ConversationType.GROUP);

      expect(trackingHelpers.getConversationType(conversation_et)).toBe(ConversationType.GROUP);
    });

    it('returns undefined if type cannot be determined', () => {
      expect(trackingHelpers.getConversationType({})).not.toBeDefined();
      expect(trackingHelpers.getConversationType()).not.toBeDefined();
    });
  });
});
