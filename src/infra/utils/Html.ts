import { parse } from 'node-html-parser';

export class Html {
    
    static parse = async (link: string): Promise<string> => {
        const html = await this.getPageAsText(link);
        const root = parse(html);
        return root.toString();
    }
    
    static getAtributte = async (link: string, selector: string, attribute: string): Promise<string> => {
        const html = await this.getPageAsText(link);
        const root = parse(html);
        const element = root.querySelector(selector);
        return element?.getAttribute(attribute) ?? '';
    }

    private static getPageAsText = async (link: string): Promise<string> => {
        return await fetch(link).then((response) => response.text());
    }
}