import { Post, Posts } from './_posts';

const post = function (postID: Posts): Post {
  return {
    categories: ['Animation'],
    content:
      '<p>Browsers shipped a new set of CSS viewport units in 2022. These units make it easier to size elements in mobile browsers, where the browser’s retractable UI affects the height of the viewport as the user scrolls the page. Unfortunately, the new units do <em>not</em> make it easier to size elements in desktop browsers, where classic scrollbars affect the width and height of the viewport.</p><p>The following video shows a desktop browser with classic scrollbars. As we resize the viewport (dashed line) in different ways, the CSS length <code>100dvw</code> matches the width of the viewport in all situations <em>except</em> when a vertical classic scrollbar is present on the page. In that case, <code>100dvw</code> is larger than the viewport width. This is the <strong>classic scrollbar problem</strong> of CSS viewport units. When the page has a vertical classic scrollbar, the length <code>100dvw</code> is larger than the viewport width. In fact, all viewport units have this problem.</p><p>Before discussing the solutions and workarounds to the classic scrollbar problem, we should familiarize ourselves with all the relevant concepts, which include the <strong>visual and layout viewport</strong>, the <strong>two types of zoom</strong>, the <strong>initial containing block</strong>, the original and new <strong>viewport units</strong>, and the <strong>two types of scrollbars</strong>.</p>',
    date: new Date('2023-3-5'),
    id: postID,
    short_summary:
      'Since the introduction of CSS viewport units in 2012, many of us have been using <span>width: 100vw</span> as a way to set an element’s width...',
    summary:
      'Since the introduction of CSS viewport units in 2012, many of us have been using <span>width: 100vw</span> as a way to set an element’s width to the full width of the viewport. But, as Šime Vidas explains in this deep dive, <span>100vw</span> does not always represent the full width of the viewport due to differences in how browsers handle scrollbars.',
    title: 'New CSS Viewport Units Do Not Solve The Classic Scrollbar Problem',
  };
};

export default post;
