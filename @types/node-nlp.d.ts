declare module 'node-nlp' {
  export interface NlpManagerSettings {
    container?: any;
    languages?: string[];
    nlu?: {
        log?: boolean;
    };
    ner?: {
        useDuckling?: boolean;
        ducklingUrl?: string;
        locale?: string;
        threshold?: number;
    };
    action?: {
        [key: string]: (params: any, context: any, result: any) => Promise<void> | void;
    };
    settings?: any;
    forceNER?: boolean;
    processTransformer?: (result: any) => any;
  }
  
  export class NlpManager {
    private readonly settings;
    private container;
    private nlp;
    private sentimentManager;
    constructor(settings: NlpManagerSettings);
    addDocument(locale: string, utterance: string, intent: string): any;
    removeDocument(locale: string, utterance: string, intent: string): any;
    addLanguage(locale: string): any;
    removeLanguage(locale: string): any;
    assignDomain(locale: string, intent: string, domain: string): any;
    getIntentDomain(locale: string, intent: string): string;
    getDomains(): string[];
    guessLanguage(text: string): string;
    addAction(intent: string, action: string, parameters: string[], fn?: (params: any, context: any, result: any) => Promise<void> | void): any;
    getActions(intent: string): string[];
    removeAction(intent: string, action: string, parameters?: string[]): boolean;
    removeActions(intent: string): boolean;
    addAnswer(locale: string, intent: string, answer: string, opts?: any): string;
    removeAnswer(locale: string, intent: string, answer: string, opts?: any): boolean;
    findAllAnswers(locale: string, intent: string): string[];
    getSentiment(locale: string, utterance: string): Promise<{
        numHits: number;
        score: number;
        comparative: number;
        language: string;
        numWords: number;
        type: string;
        vote: any;
    }>;
    addNamedEntityText(entityName: string, optionName: string, languages: string[], texts: string[]): void;
    removeNamedEntityText(entityName: string, optionName: string, languages: string[], texts: string[]): void;
    addRegexEntity(entityName: string, languages: string[], regex: string): void;
    addBetweenCondition(locale: string, name: string, left: string, right: string, opts?: any): void;
    addPositionCondition(locale: string, name: string, position: string, words: string[], opts?: any): void;
    addAfterCondition(locale: string, name: string, words: string[], opts?: any): void;
    addAfterFirstCondition(locale: string, name: string, words: string[], opts?: any): void;
    addAfterLastCondition(locale: string, name: string, words: string[], opts?: any): void;
    addBeforeCondition(locale: string, name: string, words: string[], opts?: any): void;
    addBeforeFirstCondition(locale: string, name: string, words: string[], opts?: any): void;
    addBeforeLastCondition(locale: string, name: string, words: string[], opts?: any): void;
    describeLanguage(locale: string, name: string): void;
    beginEdit(): void;
    train(): Promise<void>;
    classify(locale: string, utterance: string, settings?: Record<string, unknown>): Promise<any>;
    process(locale?: string, utterance?: string, context?: Record<string, unknown>, settings?: Record<string, unknown>): Promise<any>;
    extractEntities(locale: string, utterance: string, context?: Record<string, unknown>, settings?: Record<string, unknown>): Promise<any>;
    toObj(): any;
    fromObj(obj: any): any;
    /**
     * Export NLP manager information as a string.
     * @param {Boolean} minified If true, the returned JSON will have no spacing or indentation.
     * @returns {String} NLP manager information as a JSON string.
     */
    export(minified?: boolean): string;
    /**
     * Load NLP manager information from a string.
     * @param {String|Object} data JSON string or object to load NLP manager information from.
     */
    import(data: string | Record<string, unknown>): void;
    /**
     * Save the NLP manager information into a file.
     * @param {String} srcFileName Filename for saving the NLP manager.
     * @param minified
     */
    save(srcFileName?: string, minified?: boolean): void;
    /**
     * Load the NLP manager information from a file.
     * @param srcFileName
     */
    load(srcFileName?: string): void;
    /**
     * Load the NLP manager information from an Excel file.
     * @param fileName
     */
    loadExcel(fileName?: string): void;
    testCorpus(corpus: any): Promise<any>;
    addCorpora(corpora: any): void;
    addCorpus(corpus: any): void;
    trainAndEvaluate(fileName: string | object): Promise<any>;
  }
}

