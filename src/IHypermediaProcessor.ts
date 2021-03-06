import { IWebResource } from "./DataModel/IWebResource";
import HydraClient from "./HydraClient";

export enum Level {
  /**
   * @enum
   * @type {number}
   * Defines a not supported response.
   */
  None = 0,

  /**
   * @enum
   * @type {number}
   * Defines an exact support of the response.
   */
  FullSupport = 100
}

/**
 * Describes an abstract meta-data providing facility which translates from a raw {@link Response}
 * to an abstract data model.
 * @interface
 */
export interface IHypermediaProcessor {
  /**
   * Gets supported media types.
   * @readonly
   * @returns {Iterable<string>}
   */
  readonly supportedMediaTypes: Iterable<string>;

  /**
   * Determines level of support of a this {@link IHypermediaProcessor} for given response.
   * @param {Response} response Response to check support for.
   * @returns {Level}
   */
  supports(response: Response): Level;

  /**
   * Parses a given raw response.
   * @param {Response} response Raw fetch response holding data to be parsed.
   * @param client {HydraClient} Hydra client.
   * @returns {Promise<IWebResource>}
   */
  process(response: Response, client: HydraClient): Promise<IWebResource>;
}
