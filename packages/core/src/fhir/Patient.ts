/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Address } from './Address';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Extension } from './Extension';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Demographics and other administrative information about an individual
 * or animal receiving care or other health-related services.
 */
export interface Patient {

  /**
   * This is a Patient resource
   */
  readonly resourceType: 'Patient';

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
   * An identifier for this patient.
   */
  readonly identifier?: Identifier[];

  /**
   * Whether this patient record is in active use.
   * Many systems use this property to mark as non-current patients, such
   * as those that have not been seen for a period of time based on an
   * organization's business rules.
   *
   * It is often used to filter patient lists to exclude inactive patients
   *
   * Deceased patients may also be marked as inactive for the same reasons,
   * but may be active for some time after death.
   */
  readonly active?: boolean;

  /**
   * A name associated with the individual.
   */
  readonly name?: HumanName[];

  /**
   * A contact detail (e.g. a telephone number or an email address) by
   * which the individual may be contacted.
   */
  readonly telecom?: ContactPoint[];

  /**
   * Administrative Gender - the gender that the patient is considered to
   * have for administration and record keeping purposes.
   */
  readonly gender?: string;

  /**
   * The date of birth for the individual.
   */
  readonly birthDate?: Date | string;

  /**
   * Indicates if the individual is deceased or not.
   */
  readonly deceasedBoolean?: boolean;

  /**
   * Indicates if the individual is deceased or not.
   */
  readonly deceasedDateTime?: string;

  /**
   * An address for the individual.
   */
  readonly address?: Address[];

  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  readonly maritalStatus?: CodeableConcept;

  /**
   * Indicates whether the patient is part of a multiple (boolean) or
   * indicates the actual birth order (integer).
   */
  readonly multipleBirthBoolean?: boolean;

  /**
   * Indicates whether the patient is part of a multiple (boolean) or
   * indicates the actual birth order (integer).
   */
  readonly multipleBirthInteger?: number;

  /**
   * Image of the patient.
   */
  readonly photo?: Attachment[];

  /**
   * A contact party (e.g. guardian, partner, friend) for the patient.
   */
  readonly contact?: PatientContact[];

  /**
   * A language which may be used to communicate with the patient about his
   * or her health.
   */
  readonly communication?: PatientCommunication[];

  /**
   * Patient's nominated care provider.
   */
  readonly generalPractitioner?: Reference[];

  /**
   * Organization that is the custodian of the patient record.
   */
  readonly managingOrganization?: Reference;

  /**
   * Link to another patient resource that concerns the same actual
   * patient.
   */
  readonly link?: PatientLink[];
}

/**
 * Demographics and other administrative information about an individual
 * or animal receiving care or other health-related services.
 */
export interface PatientCommunication {

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
   * The ISO-639-1 alpha 2 code in lower case for the language, optionally
   * followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in
   * upper case; e.g. &quot;en&quot; for English, or &quot;en-US&quot; for American English
   * versus &quot;en-EN&quot; for England English.
   */
  readonly language?: CodeableConcept;

  /**
   * Indicates whether or not the patient prefers this language (over other
   * languages he masters up a certain level).
   */
  readonly preferred?: boolean;
}

/**
 * Demographics and other administrative information about an individual
 * or animal receiving care or other health-related services.
 */
export interface PatientContact {

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
   * The nature of the relationship between the patient and the contact
   * person.
   */
  readonly relationship?: CodeableConcept[];

  /**
   * A name associated with the contact person.
   */
  readonly name?: HumanName;

  /**
   * A contact detail for the person, e.g. a telephone number or an email
   * address.
   */
  readonly telecom?: ContactPoint[];

  /**
   * Address for the contact person.
   */
  readonly address?: Address;

  /**
   * Administrative Gender - the gender that the contact person is
   * considered to have for administration and record keeping purposes.
   */
  readonly gender?: string;

  /**
   * Organization on behalf of which the contact is acting or for which the
   * contact is working.
   */
  readonly organization?: Reference;

  /**
   * The period during which this contact person or organization is valid
   * to be contacted relating to this patient.
   */
  readonly period?: Period;
}

/**
 * Demographics and other administrative information about an individual
 * or animal receiving care or other health-related services.
 */
export interface PatientLink {

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
   * The other patient resource that the link refers to.
   */
  readonly other?: Reference;

  /**
   * The type of link between this patient resource and another patient
   * resource.
   */
  readonly type?: string;
}
