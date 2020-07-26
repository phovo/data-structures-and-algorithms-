export interface IOInterface {   
    /**
     * scan input and return value
     * 
     * @param source 
     */
    onScan(source?: string): string

    /**
     * read from path and return value
     * 
     * @param path 
     */
    onRead(path: string): void
}
