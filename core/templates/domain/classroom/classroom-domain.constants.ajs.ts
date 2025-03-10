// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Constants for the classroom domain.
 */

// TODO(#7092): Delete this file once migration is complete and these AngularJS
// equivalents of the Angular constants are no longer needed.
import {ClassroomDomainConstants} from 'domain/classroom/classroom-domain.constants';

angular
  .module('oppia')
  .constant(
    'CLASSROOOM_DATA_URL_TEMPLATE',
    ClassroomDomainConstants.CLASSROOOM_DATA_URL_TEMPLATE
  );

angular
  .module('oppia')
  .constant(
    'TOPIC_VIEWER_URL_TEMPLATE',
    ClassroomDomainConstants.TOPIC_VIEWER_URL_TEMPLATE
  );

angular
  .module('oppia')
  .constant(
    'TOPIC_VIEWER_REVISION_URL_TEMPLATE',
    ClassroomDomainConstants.TOPIC_VIEWER_REVISION_URL_TEMPLATE
  );

angular
  .module('oppia')
  .constant(
    'TOPIC_VIEWER_STORY_URL_TEMPLATE',
    ClassroomDomainConstants.TOPIC_VIEWER_STORY_URL_TEMPLATE
  );

angular
  .module('oppia')
  .constant(
    'CLASSROOM_HANDLER_URL_TEMPLATE',
    ClassroomDomainConstants.CLASSROOM_HANDLER_URL_TEMPLATE
  );

angular
  .module('oppia')
  .constant(
    'NEW_CLASSROOM_ID_HANDLER_URL_TEMPLATE',
    ClassroomDomainConstants.NEW_CLASSROOM_ID_HANDLER_URL_TEMPLATE
  );

angular
  .module('oppia')
  .constant(
    'CLASSROOM_DISPLAY_INFO_HANDLER_URL_TEMPLATE',
    ClassroomDomainConstants.CLASSROOM_DISPLAY_INFO_HANDLER_URL_TEMPLATE
  );
