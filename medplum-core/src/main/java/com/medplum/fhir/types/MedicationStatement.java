/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import java.time.Instant;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class MedicationStatement extends FhirResource {
    public static final String RESOURCE_TYPE = "MedicationStatement";
    public static final String PROPERTY_RESOURCETYPE = "resourceType";
    public static final String PROPERTY_ID = "id";
    public static final String PROPERTY_META = "meta";
    public static final String PROPERTY_IMPLICITRULES = "implicitRules";
    public static final String PROPERTY_LANGUAGE = "language";
    public static final String PROPERTY_TEXT = "text";
    public static final String PROPERTY_CONTAINED = "contained";
    public static final String PROPERTY_MODIFIEREXTENSION = "modifierExtension";
    public static final String PROPERTY_IDENTIFIER = "identifier";
    public static final String PROPERTY_BASEDON = "basedOn";
    public static final String PROPERTY_PARTOF = "partOf";
    public static final String PROPERTY_STATUS = "status";
    public static final String PROPERTY_STATUSREASON = "statusReason";
    public static final String PROPERTY_CATEGORY = "category";
    public static final String PROPERTY_MEDICATIONCODEABLECONCEPT = "medicationCodeableConcept";
    public static final String PROPERTY_MEDICATIONREFERENCE = "medicationReference";
    public static final String PROPERTY_SUBJECT = "subject";
    public static final String PROPERTY_CONTEXT = "context";
    public static final String PROPERTY_EFFECTIVEDATETIME = "effectiveDateTime";
    public static final String PROPERTY_EFFECTIVEPERIOD = "effectivePeriod";
    public static final String PROPERTY_DATEASSERTED = "dateAsserted";
    public static final String PROPERTY_INFORMATIONSOURCE = "informationSource";
    public static final String PROPERTY_DERIVEDFROM = "derivedFrom";
    public static final String PROPERTY_REASONCODE = "reasonCode";
    public static final String PROPERTY_REASONREFERENCE = "reasonReference";
    public static final String PROPERTY_NOTE = "note";
    public static final String PROPERTY_DOSAGE = "dosage";

    public static Builder create() {
        return new Builder();
    }

    public static Builder create(final JsonObject data) {
        return new Builder(data);
    }

    public MedicationStatement(final JsonObject data) {
        super(data);
    }

    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    public String implicitRules() {
        return getString(PROPERTY_IMPLICITRULES);
    }

    /**
     * The base language in which the resource is written.
     */
    public String language() {
        return getString(PROPERTY_LANGUAGE);
    }

    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    public Narrative text() {
        return getObject(Narrative.class, PROPERTY_TEXT);
    }

    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    public java.util.List<FhirResource> contained() {
        return getList(FhirResource.class, PROPERTY_CONTAINED);
    }

    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    public java.util.List<Extension> modifierExtension() {
        return getList(Extension.class, PROPERTY_MODIFIEREXTENSION);
    }

    /**
     * Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
     */
    public java.util.List<Identifier> identifier() {
        return getList(Identifier.class, PROPERTY_IDENTIFIER);
    }

    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    public java.util.List<Reference> basedOn() {
        return getList(Reference.class, PROPERTY_BASEDON);
    }

    /**
     * A larger event of which this particular event is a component or step.
     */
    public java.util.List<Reference> partOf() {
        return getList(Reference.class, PROPERTY_PARTOF);
    }

    /**
     * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed.
     */
    public String status() {
        return getString(PROPERTY_STATUS);
    }

    /**
     * Captures the reason for the current state of the MedicationStatement.
     */
    public java.util.List<CodeableConcept> statusReason() {
        return getList(CodeableConcept.class, PROPERTY_STATUSREASON);
    }

    /**
     * Indicates where the medication is expected to be consumed or administered.
     */
    public CodeableConcept category() {
        return getObject(CodeableConcept.class, PROPERTY_CATEGORY);
    }

    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    public CodeableConcept medicationCodeableConcept() {
        return getObject(CodeableConcept.class, PROPERTY_MEDICATIONCODEABLECONCEPT);
    }

    /**
     * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    public Reference medicationReference() {
        return getObject(Reference.class, PROPERTY_MEDICATIONREFERENCE);
    }

    /**
     * The person, animal or group who is/was taking the medication.
     */
    public Reference subject() {
        return getObject(Reference.class, PROPERTY_SUBJECT);
    }

    /**
     * The encounter or episode of care that establishes the context for this MedicationStatement.
     */
    public Reference context() {
        return getObject(Reference.class, PROPERTY_CONTEXT);
    }

    /**
     * The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
     */
    public String effectiveDateTime() {
        return getString(PROPERTY_EFFECTIVEDATETIME);
    }

    /**
     * The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
     */
    public Period effectivePeriod() {
        return getObject(Period.class, PROPERTY_EFFECTIVEPERIOD);
    }

    /**
     * The date when the medication statement was asserted by the information source.
     */
    public java.time.Instant dateAsserted() {
        return java.time.Instant.parse(data.getString(PROPERTY_DATEASSERTED));
    }

    /**
     * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
     */
    public Reference informationSource() {
        return getObject(Reference.class, PROPERTY_INFORMATIONSOURCE);
    }

    /**
     * Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
     */
    public java.util.List<Reference> derivedFrom() {
        return getList(Reference.class, PROPERTY_DERIVEDFROM);
    }

    /**
     * A reason for why the medication is being/was taken.
     */
    public java.util.List<CodeableConcept> reasonCode() {
        return getList(CodeableConcept.class, PROPERTY_REASONCODE);
    }

    /**
     * Condition or observation that supports why the medication is being/was taken.
     */
    public java.util.List<Reference> reasonReference() {
        return getList(Reference.class, PROPERTY_REASONREFERENCE);
    }

    /**
     * Provides extra information about the medication statement that is not conveyed by the other attributes.
     */
    public java.util.List<Annotation> note() {
        return getList(Annotation.class, PROPERTY_NOTE);
    }

    /**
     * Indicates how the medication is/was or should be taken by the patient.
     */
    public java.util.List<Dosage> dosage() {
        return getList(Dosage.class, PROPERTY_DOSAGE);
    }

    public static class Builder extends FhirResource.Builder {

        private Builder() {
            super(RESOURCE_TYPE);
        }

        private Builder(final JsonObject data) {
            super(RESOURCE_TYPE, data);
        }

        public Builder resourceType(final String resourceType) {
            b.add(PROPERTY_RESOURCETYPE, resourceType);
            return this;
        }

        public Builder id(final String id) {
            b.add(PROPERTY_ID, id);
            return this;
        }

        public Builder meta(final Meta meta) {
            b.add(PROPERTY_META, meta);
            return this;
        }

        public Builder implicitRules(final String implicitRules) {
            b.add(PROPERTY_IMPLICITRULES, implicitRules);
            return this;
        }

        public Builder language(final String language) {
            b.add(PROPERTY_LANGUAGE, language);
            return this;
        }

        public Builder text(final Narrative text) {
            b.add(PROPERTY_TEXT, text);
            return this;
        }

        public Builder contained(final java.util.List<FhirResource> contained) {
            b.add(PROPERTY_CONTAINED, FhirObject.toArray(contained));
            return this;
        }

        public Builder modifierExtension(final java.util.List<Extension> modifierExtension) {
            b.add(PROPERTY_MODIFIEREXTENSION, FhirObject.toArray(modifierExtension));
            return this;
        }

        public Builder identifier(final java.util.List<Identifier> identifier) {
            b.add(PROPERTY_IDENTIFIER, FhirObject.toArray(identifier));
            return this;
        }

        public Builder basedOn(final java.util.List<Reference> basedOn) {
            b.add(PROPERTY_BASEDON, FhirObject.toArray(basedOn));
            return this;
        }

        public Builder partOf(final java.util.List<Reference> partOf) {
            b.add(PROPERTY_PARTOF, FhirObject.toArray(partOf));
            return this;
        }

        public Builder status(final String status) {
            b.add(PROPERTY_STATUS, status);
            return this;
        }

        public Builder statusReason(final java.util.List<CodeableConcept> statusReason) {
            b.add(PROPERTY_STATUSREASON, FhirObject.toArray(statusReason));
            return this;
        }

        public Builder category(final CodeableConcept category) {
            b.add(PROPERTY_CATEGORY, category);
            return this;
        }

        public Builder medicationCodeableConcept(final CodeableConcept medicationCodeableConcept) {
            b.add(PROPERTY_MEDICATIONCODEABLECONCEPT, medicationCodeableConcept);
            return this;
        }

        public Builder medicationReference(final Reference medicationReference) {
            b.add(PROPERTY_MEDICATIONREFERENCE, medicationReference);
            return this;
        }

        public Builder subject(final Reference subject) {
            b.add(PROPERTY_SUBJECT, subject);
            return this;
        }

        public Builder context(final Reference context) {
            b.add(PROPERTY_CONTEXT, context);
            return this;
        }

        public Builder effectiveDateTime(final String effectiveDateTime) {
            b.add(PROPERTY_EFFECTIVEDATETIME, effectiveDateTime);
            return this;
        }

        public Builder effectivePeriod(final Period effectivePeriod) {
            b.add(PROPERTY_EFFECTIVEPERIOD, effectivePeriod);
            return this;
        }

        public Builder dateAsserted(final java.time.Instant dateAsserted) {
            b.add(PROPERTY_DATEASSERTED, dateAsserted.toString());
            return this;
        }

        public Builder informationSource(final Reference informationSource) {
            b.add(PROPERTY_INFORMATIONSOURCE, informationSource);
            return this;
        }

        public Builder derivedFrom(final java.util.List<Reference> derivedFrom) {
            b.add(PROPERTY_DERIVEDFROM, FhirObject.toArray(derivedFrom));
            return this;
        }

        public Builder reasonCode(final java.util.List<CodeableConcept> reasonCode) {
            b.add(PROPERTY_REASONCODE, FhirObject.toArray(reasonCode));
            return this;
        }

        public Builder reasonReference(final java.util.List<Reference> reasonReference) {
            b.add(PROPERTY_REASONREFERENCE, FhirObject.toArray(reasonReference));
            return this;
        }

        public Builder note(final java.util.List<Annotation> note) {
            b.add(PROPERTY_NOTE, FhirObject.toArray(note));
            return this;
        }

        public Builder dosage(final java.util.List<Dosage> dosage) {
            b.add(PROPERTY_DOSAGE, FhirObject.toArray(dosage));
            return this;
        }

        public MedicationStatement build() {
            return new MedicationStatement(b.build());
        }
    }
}