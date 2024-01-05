import { Post, Posts } from './_posts';

const post = function (postID: Posts): Post {
  return {
    categories: ['CSS', 'API'],
    content:
      '<p>Browsers shipped a new set of CSS viewport units in 2022. These units make it easier to size elements in mobile browsers, where the browser’s retractable UI affects the height of the viewport as the user scrolls the page. Unfortunately, the new units do <em>not</em> make it easier to size elements in desktop browsers, where classic scrollbars affect the width and height of the viewport.</p><p>The following video shows a desktop browser with classic scrollbars. As we resize the viewport (dashed line) in different ways, the CSS length <code>100dvw</code> matches the width of the viewport in all situations <em>except</em> when a vertical classic scrollbar is present on the page. In that case, <code>100dvw</code> is larger than the viewport width. This is the <strong>classic scrollbar problem</strong> of CSS viewport units. When the page has a vertical classic scrollbar, the length <code>100dvw</code> is larger than the viewport width. In fact, all viewport units have this problem.</p><p>Before discussing the solutions and workarounds to the classic scrollbar problem, we should familiarize ourselves with all the relevant concepts, which include the <strong>visual and layout viewport</strong>, the <strong>two types of zoom</strong>, the <strong>initial containing block</strong>, the original and new <strong>viewport units</strong>, and the <strong>two types of scrollbars</strong>.</p>',
    date: new Date('2023-1-12'),
    id: postID,
    short_summary:
      'The View Transitions API is a new — but game-changing — feature that allows us to do the types of reactive state-based UI...',
    summary:
      'The View Transitions API is a new — but game-changing — feature that allows us to do the types of reactive state-based UI and page transitions that have traditionally been exclusive to JavaScript frameworks. In the first part of this mini two-part series, Adrian Bece thoroughly explains why we need the API and demonstrates its basic usage.',
    title: 'Two Forms of Pre-rendering',
  };
};

export default post;
