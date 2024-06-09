import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownTranslateService {

  constructor() { }

  public convert(markdown: string): string {
    if (!markdown) {
      return '';
    }

    // Convert headers
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert bold and italic text
    markdown = markdown.replace(/\*\*\*(.*?)\*\*\*/gim, '<b><i>$1</i></b>'); // bold italic
    markdown = markdown.replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>'); // bold
    markdown = markdown.replace(/\*(.*?)\*/gim, '<i>$1</i>'); // italic
    markdown = markdown.replace(/___(.*?)___/gim, '<b><i>$1</i></b>'); // bold italic
    markdown = markdown.replace(/__(.*?)__/gim, '<b>$1</b>'); // bold
    markdown = markdown.replace(/_(.*?)_/gim, '<i>$1</i>'); // italic

    // Convert blockquotes
    markdown = markdown.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Convert lists
    markdown = markdown.replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>');
    markdown = markdown.replace(/^\* (.*)/gim, '<li>$1</li>');
    markdown = markdown.replace(/^\s*\n\d\. (.*)/gim, '<ol>\n<li>$1</li>');
    markdown = markdown.replace(/^\d\. (.*)/gim, '<li>$1</li>');
    markdown = markdown.replace(/<\/li>\s*\n<li>/gim, '</li>\n<li>');
    markdown = markdown.replace(/<\/li>\n<\/ul>/gim, '</li>\n</ul>');
    markdown = markdown.replace(/<\/li>\n<\/ol>/gim, '</li>\n</ol>');

    // Convert images
    markdown = markdown.replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />');

    // Convert links
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    // Convert code blocks
    markdown = markdown.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    markdown = markdown.replace(/`(.*?)`/gim, '<code>$1</code>');

    // Convert line breaks
    markdown = markdown.replace(/\n$/gim, '<br>');

    return markdown.trim();
  }
  
}
