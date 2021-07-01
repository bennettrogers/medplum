/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuide {

  /**
   * This is a ImplementationGuide resource
   */
  readonly resourceType: 'ImplementationGuide';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * An absolute URI that is used to identify this implementation guide
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this implementation guide is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the implementation guide is stored on
   * different servers.
   */
  readonly url?: string;

  /**
   * The identifier that is used to identify this version of the
   * implementation guide when it is referenced in a specification, model,
   * design or instance. This is an arbitrary value managed by the
   * implementation guide author and is not expected to be globally unique.
   * For example, it might be a timestamp (e.g. yyyymmdd) if a managed
   * version is not available. There is also no expectation that versions
   * can be placed in a lexicographical sequence.
   */
  readonly version?: string;

  /**
   * A natural language name identifying the implementation guide. This
   * name should be usable as an identifier for the module by machine
   * processing applications such as code generation.
   */
  readonly name?: string;

  /**
   * A short, descriptive, user-friendly title for the implementation
   * guide.
   */
  readonly title?: string;

  /**
   * The status of this implementation guide. Enables tracking the
   * life-cycle of the content.
   */
  readonly status?: string;

  /**
   * A Boolean value to indicate that this implementation guide is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  readonly experimental?: boolean;

  /**
   * The date  (and optionally time) when the implementation guide was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the implementation guide
   * changes.
   */
  readonly date?: Date | string;

  /**
   * The name of the organization or individual that published the
   * implementation guide.
   */
  readonly publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  readonly contact?: ContactDetail[];

  /**
   * A free text natural language description of the implementation guide
   * from a consumer's perspective.
   */
  readonly description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate implementation guide instances.
   */
  readonly useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the implementation guide is
   * intended to be used.
   */
  readonly jurisdiction?: CodeableConcept[];

  /**
   * A copyright statement relating to the implementation guide and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the implementation guide.
   */
  readonly copyright?: string;

  /**
   * The NPM package name for this Implementation Guide, used in the NPM
   * package distribution, which is the primary mechanism by which FHIR
   * based tooling manages IG dependencies. This value must be globally
   * unique, and should be assigned with care.
   */
  readonly packageId?: string;

  /**
   * The license that applies to this Implementation Guide, using an SPDX
   * license code, or 'not-open-source'.
   */
  readonly license?: string;

  /**
   * The version(s) of the FHIR specification that this ImplementationGuide
   * targets - e.g. describes how to use. The value of this element is the
   * formal version of the specification, without the revision number, e.g.
   * [publication].[major].[minor], which is 4.0.1. for this version.
   */
  readonly fhirVersion?: string[];

  /**
   * Another implementation guide that this implementation depends on.
   * Typically, an implementation guide uses value sets, profiles
   * etc.defined in other implementation guides.
   */
  readonly dependsOn?: ImplementationGuideDependsOn[];

  /**
   * A set of profiles that all resources covered by this implementation
   * guide must conform to.
   */
  readonly global?: ImplementationGuideGlobal[];

  /**
   * The information needed by an IG publisher tool to publish the whole
   * implementation guide.
   */
  readonly definition?: ImplementationGuideDefinition;

  /**
   * Information about an assembled implementation guide, created by the
   * publication tooling.
   */
  readonly manifest?: ImplementationGuideManifest;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideDefinition {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A logical group of resources. Logical groups can be used when building
   * pages.
   */
  readonly grouping?: ImplementationGuideGrouping[];

  /**
   * A resource that is part of the implementation guide. Conformance
   * resources (value set, structure definition, capability statements
   * etc.) are obvious candidates for inclusion, but any kind of resource
   * can be included as an example resource.
   */
  readonly resource?: ImplementationGuideResource[];

  /**
   * A page / section in the implementation guide. The root page is the
   * implementation guide home page.
   */
  readonly page?: ImplementationGuidePage;

  /**
   * Defines how IG is built by tools.
   */
  readonly parameter?: ImplementationGuideParameter[];

  /**
   * A template for building resources.
   */
  readonly template?: ImplementationGuideTemplate[];
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideDependsOn {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A canonical reference to the Implementation guide for the dependency.
   */
  readonly uri?: string;

  /**
   * The NPM package name for the Implementation Guide that this IG depends
   * on.
   */
  readonly packageId?: string;

  /**
   * The version of the IG that is depended on, when the correct version is
   * required to understand the IG correctly.
   */
  readonly version?: string;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideGlobal {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The type of resource that all instances must conform to.
   */
  readonly type?: string;

  /**
   * A reference to the profile that all instances must conform to.
   */
  readonly profile?: string;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideGrouping {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The human-readable title to display for the package of resources when
   * rendering the implementation guide.
   */
  readonly name?: string;

  /**
   * Human readable text describing the package.
   */
  readonly description?: string;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideManifest {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A pointer to official web page, PDF or other rendering of the
   * implementation guide.
   */
  readonly rendering?: string;

  /**
   * A resource that is part of the implementation guide. Conformance
   * resources (value set, structure definition, capability statements
   * etc.) are obvious candidates for inclusion, but any kind of resource
   * can be included as an example resource.
   */
  readonly resource?: ImplementationGuideResource1[];

  /**
   * Information about a page within the IG.
   */
  readonly page?: ImplementationGuidePage1[];

  /**
   * Indicates a relative path to an image that exists within the IG.
   */
  readonly image?: string[];

  /**
   * Indicates the relative path of an additional non-page, non-image file
   * that is part of the IG - e.g. zip, jar and similar files that could be
   * the target of a hyperlink in a derived IG.
   */
  readonly other?: string[];
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuidePage {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The source address for the page.
   */
  readonly nameUrl?: string;

  /**
   * The source address for the page.
   */
  readonly nameReference?: Reference;

  /**
   * A short title used to represent this page in navigational structures
   * such as table of contents, bread crumbs, etc.
   */
  readonly title?: string;

  /**
   * A code that indicates how the page is generated.
   */
  readonly generation?: string;

  /**
   * Nested Pages/Sections under this page.
   */
  readonly page?: ImplementationGuidePage[];
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuidePage1 {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Relative path to the page.
   */
  readonly name?: string;

  /**
   * Label for the page intended for human display.
   */
  readonly title?: string;

  /**
   * The name of an anchor available on the page.
   */
  readonly anchor?: string[];
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideParameter {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * apply | path-resource | path-pages | path-tx-cache |
   * expansion-parameter | rule-broken-links | generate-xml | generate-json
   * | generate-turtle | html-template.
   */
  readonly code?: string;

  /**
   * Value for named type.
   */
  readonly value?: string;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideResource {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Where this resource is found.
   */
  readonly reference?: Reference;

  /**
   * Indicates the FHIR Version(s) this artifact is intended to apply to.
   * If no versions are specified, the resource is assumed to apply to all
   * the versions stated in ImplementationGuide.fhirVersion.
   */
  readonly fhirVersion?: string[];

  /**
   * A human assigned name for the resource. All resources SHOULD have a
   * name, but the name may be extracted from the resource (e.g.
   * ValueSet.name).
   */
  readonly name?: string;

  /**
   * A description of the reason that a resource has been included in the
   * implementation guide.
   */
  readonly description?: string;

  /**
   * If true or a reference, indicates the resource is an example instance.
   * If a reference is present, indicates that the example is an example
   * of the specified profile.
   */
  readonly exampleBoolean?: boolean;

  /**
   * If true or a reference, indicates the resource is an example instance.
   * If a reference is present, indicates that the example is an example
   * of the specified profile.
   */
  readonly exampleCanonical?: string;

  /**
   * Reference to the id of the grouping this resource appears in.
   */
  readonly groupingId?: string;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideResource1 {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Where this resource is found.
   */
  readonly reference?: Reference;

  /**
   * If true or a reference, indicates the resource is an example instance.
   * If a reference is present, indicates that the example is an example
   * of the specified profile.
   */
  readonly exampleBoolean?: boolean;

  /**
   * If true or a reference, indicates the resource is an example instance.
   * If a reference is present, indicates that the example is an example
   * of the specified profile.
   */
  readonly exampleCanonical?: string;

  /**
   * The relative path for primary page for this resource within the IG.
   */
  readonly relativePath?: string;
}

/**
 * A set of rules of how a particular interoperability or standards
 * problem is solved - typically through the use of FHIR resources. This
 * resource is used to gather all the parts of an implementation guide
 * into a logical whole and to publish a computable definition of all the
 * parts.
 */
export interface ImplementationGuideTemplate {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Type of template specified.
   */
  readonly code?: string;

  /**
   * The source location for the template.
   */
  readonly source?: string;

  /**
   * The scope in which the template applies.
   */
  readonly scope?: string;
}
